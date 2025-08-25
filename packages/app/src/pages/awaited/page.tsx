import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { Clock } from "lucide-react"

function Awaited() {
  return (
    <ContentWrapper>
      <Title content="Ожидаемые" icon={<Clock />} />
      <div className="p-4">
        <p className="text-muted-foreground">Задачи, ожидающие выполнения</p>
      </div>
    </ContentWrapper>
  )
}

export default Awaited
