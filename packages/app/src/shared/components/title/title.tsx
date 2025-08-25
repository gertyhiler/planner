import { Typography } from "@planner/ui-kit/components/typography"

interface TitleProps {
  content: string
  progress?: number
  complied?: number
  icon?: React.ReactNode
}

function Title({ content, progress, complied, icon }: TitleProps) {
  return (
    <div className="flex items-center gap-2">
      {icon && !progress && !complied && icon}
      {progress && !icon && !complied && (
        <div className="relative w-10 h-10">
          {/* Радиальный прогресс бар */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-primary border-primary"
              strokeWidth="3.8"
              fill="none"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
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
  )
}

export default Title
