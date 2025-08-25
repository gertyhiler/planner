import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { Calendar } from "lucide-react"

function CalendarPage() {
  return (
    <ContentWrapper>
      <Title content="Календарь" icon={<Calendar />} />
      <div className="p-4">
        <p className="text-muted-foreground">Календарное представление задач</p>
      </div>
    </ContentWrapper>
  )
}

export default CalendarPage
