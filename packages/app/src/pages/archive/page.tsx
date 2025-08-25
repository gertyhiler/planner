import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { BookAIcon } from "lucide-react"

function Archive() {
  return (
    <ContentWrapper>
      <Title content="Архив" icon={<BookAIcon />} />
      <div className="p-4">
        <p className="text-muted-foreground">Архивированные задачи и проекты</p>
      </div>
    </ContentWrapper>
  )
}

export default Archive
