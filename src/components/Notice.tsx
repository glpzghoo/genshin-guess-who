import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const Notice = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>hey</TooltipTrigger>
        <TooltipContent>
          Some Voicelines are not available. Will be updated soon
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Notice;
