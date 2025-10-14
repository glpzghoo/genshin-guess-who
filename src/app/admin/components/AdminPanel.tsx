'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getAllCharacters, getDisplayName } from '@/lib/daily-challenge';
import type { Character } from '@/lib/types';
import { useVoiceLinePlayer } from '@/lib/hooks/use-voice-line-player';
import { VoiceLineHint } from '@/components/VoiceLineHint';

type VoiceLineEntry = { title: string; text: string; audioSrc?: string };

const toAudioSrc = (character: Character, audioId?: string): string | undefined => {
  if (!character?.route || !audioId) return undefined;
  const trimmedId = audioId.replace(/\.(ogg|mp3|wav)$/i, '').trim();
  if (!trimmedId) return undefined;
  const routePath = character.route
    .replace(/^\//, '')
    .replace(/\/+/g, '/')
    .replace(/\.{2,}/g, '.')
    .trim();
  const fileName = encodeURIComponent(trimmedId);
  return `https://genshin-voicelines.s3.eu-north-1.amazonaws.com/voicelines/${routePath}/${fileName}.ogg`;
};

const extractVoiceLines = (character: Character): VoiceLineEntry[] => {
  const quotes = character?.VL?.quotes || {};
  const keys = Object.keys(quotes).sort();
  const out: VoiceLineEntry[] = [];
  for (const k of keys) {
    const q = (quotes as any)[k];
    if (!q?.text) continue;
    const text = String(q.text).replace(/\\n/g, '\n').trim();
    if (!text) continue;
    const title = (q.title ?? 'Voice Line').toString().trim();
    const audioSrc = typeof q.audio === 'string' ? toAudioSrc(character, q.audio) : undefined;
    out.push({ title, text, audioSrc });
  }
  return out;
};

export default function AdminPanel() {
  const [query, setQuery] = useState('');
  const characters = useMemo(() => getAllCharacters(), []);
  const filtered = useMemo(() => {
    if (!query.trim()) return characters;
    const q = query.toLowerCase();
    return characters.filter((c) =>
      [
        c.name,
        c.element,
        c.weaponType,
        c.region,
        c.EN_VA,
        c.JP_VA,
      ]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [characters, query]);

  const { play, stop, isPlaying, hasError } = useVoiceLinePlayer();

  const handleLogout = async () => {
    await fetch('/api/admin', { method: 'DELETE' });
    window.location.reload();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search by name, element, region, VA..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-md"
          />
          <Badge className="bg-white/10 border border-white/15 text-white/80">{filtered.length} characters</Badge>
        </div>
        <Button variant="outline" onClick={handleLogout} className="border-white/30 bg-white/10 text-white hover:bg-white/20">
          Logout
        </Button>
      </div>

      <Accordion type="multiple" className="divide-y divide-white/10 rounded-xl border border-white/10">
        {filtered.map((c) => {
          const voiceLines = extractVoiceLines(c);
          return (
            <AccordionItem key={c.id} value={String(c.id)} className="px-4">
              <AccordionTrigger className="py-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                    <img src={`/assets/ui/${c.icon}.png`} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{getDisplayName(c)}</div>
                    <div className="mt-1 text-xs text-white/70">
                      {c.element} • {c.weaponType} • {c.region} • {c.rank}-Star
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-1 space-y-2">
                    <div className="text-sm font-medium text-white/80">Character Info</div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
                      <div className="text-white/60">Body Type</div>
                      <div>{c.bodyType}</div>
                      <div className="text-white/60">English VA</div>
                      <div>{c.EN_VA || '—'}</div>
                      <div className="text-white/60">Japanese VA</div>
                      <div>{c.JP_VA || '—'}</div>
                      <div className="text-white/60">Birthday</div>
                      <div>{Array.isArray(c.birthday) && c.birthday.length === 2 ? `${c.birthday[0]}/${c.birthday[1]}` : '—'}</div>
                      <div className="text-white/60">Release Ver.</div>
                      <div>{c.VersionReleased || '—'}</div>
                      <div className="text-white/60">Release</div>
                      <div>{c.release ? new Date(c.release * 1000).toLocaleDateString() : '—'}</div>
                      <div className="text-white/60">Route</div>
                      <div className="truncate" title={c.route}>{c.route || '—'}</div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm font-medium text-white/80 mb-2">All Voice Lines</div>
                    {voiceLines.length === 0 ? (
                      <div className="text-sm text-white/60">No voice lines found.</div>
                    ) : (
                      <div className="space-y-4">
                        {voiceLines.map((vl, idx) => (
                          <div key={`${c.id}-${idx}`} className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="text-xs uppercase tracking-wide text-white/55">{vl.title}</div>
                            <div className="mt-2">
                              <VoiceLineHint
                                text={vl.text}
                                audioSrc={vl.audioSrc}
                                onPlay={play}
                                onStop={stop}
                                isPlaying={isPlaying}
                                hasError={hasError}
                                character={getDisplayName(c)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

