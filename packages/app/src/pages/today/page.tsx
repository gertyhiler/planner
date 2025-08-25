import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { StarIcon } from "lucide-react"

function Today() {
  return (
    <ContentWrapper>
      <Title content="Сегодня" icon={<StarIcon />} />
      <div className="p-4">
        <p className="text-muted-foreground">Задачи на сегодня</p>
      </div>
    </ContentWrapper>
  )
}

export default Today
