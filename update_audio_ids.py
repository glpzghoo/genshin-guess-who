#!/usr/bin/env python3
import os
import re
import glob

def get_audio_files(character_name):
    """Get all VO_* basenames for a character."""
    path = f"public/assets/voicelines/{character_name}"
    if not os.path.exists(path):
        return set()
    files = os.listdir(path)
    basenames = {f.replace('.ogg', '') for f in files if f.endswith('.ogg')}
    return basenames

def update_voice_lines_file(file_path):
    """Update a single voice-lines file."""
    # Extract character name from path
    # e.g., src/lib/db/voice-lines/pyro/chevreuse.ts -> Chevreuse
    parts = file_path.split('/')
    element = parts[-2]
    character = parts[-1].replace('.ts', '').capitalize()

    # Handle special cases
    if character == 'Collie':
        character = 'Collei'
    elif character == 'Ningguan':
        character = 'Ningguang'
    elif character == 'Wriotheslay':
        character = 'Wriothesley'
    elif character == 'Xl':
        character = 'Xiangling'

    audio_files = get_audio_files(character)
    if not audio_files:
        print(f"No audio files found for {character}")
        return

    with open(file_path, 'r') as f:
        content = f.read()

    # Find all audio: 'number' patterns
    pattern = r"audio:\s*'(\d+)'"
    matches = re.findall(pattern, content)

    if not matches:
        print(f"No numeric audio IDs found in {file_path}")
        return

    # Create mapping from numeric ID to VO_* basename
    # Assuming the order in the file matches the order of audio files
    # But we need to be careful - let's sort the audio files
    sorted_audio = sorted(audio_files)

    # But actually, the numeric IDs might correspond to specific entries
    # We need to map based on the title or something? Wait, no.
    # Looking at the structure, each entry has a key like '0', '1', etc.
    # And audio: 'number' where number might be the ID.

    # Actually, from the user's description, the old IDs are like '1006', and new are VO_Chevreuse_*
    # So we need to replace 'audio: '1006'' with 'audio: 'VO_Chevreuse_*''

    # But how to map the numbers to the correct VO_*?
    # The user said "all entries should correspond to an existing file"
    # So probably the numeric IDs are placeholders, and we need to find the correct VO_* for each entry.

    # Looking at the titles, they might correspond.
    # For example, in chevreuse.ts, '0' is Hello, which should be VO_Chevreuse_Hello

    # So, we need to parse the file and for each entry, find the corresponding VO_* file.

    # Let's parse the file structure
    # The file has quotes: { '0': { title: '...', audio: '...', ... }, ... }

    # We can extract the title and find the matching VO_* file.

    # First, let's find all entries
    quote_pattern = r"'(\d+)':\s*\{\s*title:\s*'([^']*)'"
    entries = re.findall(quote_pattern, content)

    updated_content = content
    for key, title in entries:
        # Find audio file that matches the title
        # Titles are like 'Hello', 'Chat: Musket', etc.
        # VO files are like VO_Chevreuse_Hello, VO_Chevreuse_Chat_-_Musket

        # Convert title to VO format
        vo_title = title.replace(' ', '_').replace(':', '').replace('___', '_').replace('?', '').replace('!', '').replace('.', '').replace(',', '').replace('(', '').replace(')', '').replace('[', '').replace(']', '').replace('{', '').replace('}', '').replace('/', '_').replace('\\', '_')
        vo_candidate = f"VO_{character}_{vo_title}"

        # But some have special formats like VO_Chevreuse_About_Chevreuse_-_Special_Security_and_Surveillance_Patrol

        # Actually, looking at the files, they seem to have specific patterns.
        # Perhaps it's better to replace the numeric ID with the VO_ version based on the title.

        # For simplicity, since the user said "update every `audio` property", and "correspond to an existing file",
        # and from chevreuse, the audio is already VO_Chevreuse_*

        # Wait, in the chevreuse file I read, it's already VO_Chevreuse_Hello, etc.

        # So for other files, we need to do the same.

        # But the search showed files with audio: '1000', etc.

        # So, we need to map the numeric ID to the correct VO_*.

        # But how? The numeric IDs are probably sequential or something.

        # Looking at yelan.ts, '0' has audio: '1000', title: 'Hello'

        # And for Yelan, there should be VO_Yelan_Hello

        # So, perhaps the mapping is to replace '1000' with 'VO_Yelan_Hello', etc.

        # But to do that, I need to know the character name and the title.

        # Yes, that's it.

        # For each entry, replace audio: 'number' with audio: 'VO_{character}_{processed_title}'

        # Where processed_title is title with spaces to _, remove special chars.

        # But looking at the actual files, the VO names have specific formats.

        # For example, VO_Chevreuse_About_Us_-_Interests

        # So, 'About Us: Interests' becomes About_Us_-_Interests

        # Yes, replace spaces with _, : with -, etc.

        # Let's define a function to convert title to VO suffix.

        def title_to_vo_suffix(title):
            # Replace spaces with _
            suffix = title.replace(' ', '_')
            # Replace : with -
            suffix = suffix.replace(':', '-')
            # Remove other special chars? But in examples, ___ becomes _ , but wait.

            # In chevreuse, 'About ___: Special Security and Surveillance Patrol' -> VO_Chevreuse_About_Chevreuse_-_Special_Security_and_Surveillance_Patrol

            # So, ___ becomes Chevreuse

            # Oh, it's not simple.

            # The ___ is placeholder for the character name.

            # So, in titles, ___ is the character name.

            # For 'About ___: Interests' , ___ is Chevreuse, so VO_Chevreuse_About_Chevreuse_-_Interests ? No.

            # In the file, it's VO_Chevreuse_About_Us_-_Interests

            # 'About Us: Interests' -> About_Us_-_Interests

            # The ___ is not in the VO name.

            # In the title it's 'About ___: Special Security and Surveillance Patrol' but VO is VO_Chevreuse_About_Chevreuse_-_Special_Security_and_Surveillance_Patrol

            # So, ___ is replaced with Chevreuse in the VO name.

            # Yes, in the VO name, ___ is the character name.

            # So, to convert, replace ___ with character name, then replace spaces with _, : with -, etc.

            # Yes.

            suffix = title.replace('___', character)
            suffix = re.sub(r'[^\w\-]', '_', suffix)  # replace non-word chars with _
            suffix = re.sub(r'_+', '_', suffix)  # collapse multiple _
            suffix = suffix.strip('_')
            return suffix

        vo_suffix = title_to_vo_suffix(title)
        vo_full = f"VO_{character}_{vo_suffix}"

        # Check if it exists
        if vo_full in audio_files:
            # Replace the audio line
            old_audio = f"audio: '{key}'"  # Wait, no, the key is the quote key, the audio is the number.

            # The audio is '1000', but the key is '0'

            # So, find the line with audio: 'number' in that entry.

            # Since entries are sequential, perhaps the number is key + 1000 or something.

            # In yelan, '0': audio: '1000', '1': '1101', etc.

            # So, number = 1000 + 100*key + something.

            # '0': '1000', '1': '1101', '2': '1102', '3': '1103', '4': '1201', etc.

            # It's not simple.

            # Perhaps the number is arbitrary, and we need to replace based on the title.

            # Since the file has audio: 'number', and we know the VO, we can replace the number with the VO string.

            # But to find which number corresponds to which, we can search for the audio line in the entry.

            # Since the entries are in order, and assuming the order matches, we can collect all audio numbers and replace them in order with the sorted VO files.

            # But that might not be accurate.

            # Since the user said "update every `audio` property", and "correspond to an existing file", and from chevreuse it's already done, perhaps for other characters, the audio is still numeric, and we need to replace them with the VO_ versions.

            # To do it properly, I think we need to map based on the title.

            # So, for each entry, compute the expected VO name, and if it exists, replace the audio value.

            # Yes.

            # Find the audio line for this entry.

            # The entry starts with 'key': { and ends with }, 

            # Then find audio: 'number' in that block.

            # Then replace 'number' with vo_full

            # Yes.

            # Use regex to find the audio line in the entry.

            entry_pattern = rf"'{key}':\s*\{{(.*?)\}}"
            entry_match = re.search(entry_pattern, content, re.DOTALL)
            if entry_match:
                entry_content = entry_match.group(1)
                audio_match = re.search(r"audio:\s*'([^']*)'", entry_content)
                if audio_match:
                    old_audio_value = audio_match.group(1)
                    # Replace in the whole content
                    old_line = f"audio: '{old_audio_value}'"
                    new_line = f"audio: '{vo_full}'"
                    updated_content = updated_content.replace(old_line, new_line, 1)  # replace only once

    # Write back
    with open(file_path, 'w') as f:
        f.write(updated_content)

    print(f"Updated {file_path}")

def main():
    # Find all voice-lines files with numeric audio IDs
    files = glob.glob("src/lib/db/voice-lines/**/*.ts")
    for file_path in files:
        if os.path.exists(file_path):
            update_voice_lines_file(file_path)

if __name__ == "__main__":
    main()