import { Typography } from "@planner/ui-kit/components/typography";
import RadialProgress from "components/radial-progress";

function Title({
  content,
  progress,
  complied,
  icon,
}: {
  content: string;
  progress?: number;
  complied?: number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon && !progress && !complied && icon}
      {progress && !icon && !complied && (
        <RadialProgress
          progress={progress}
          className="bg-primary text-primary border-primary"
        />
      )}
      {complied && !icon && !progress && (
        <div className="relative w-10 h-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-green-600"
              strokeWidth="3.8"
              fill="none"
              d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      )}
      <Typography.h3 as="h2">{content}</Typography.h3>
    </div>
  );
}

export default Title;
