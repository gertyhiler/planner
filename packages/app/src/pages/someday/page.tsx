import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { BoxSelectIcon } from "lucide-react"

function Someday() {
  return (
    <ContentWrapper>
      <Title content="Когда-нибудь" icon={<BoxSelectIcon />} />
      <div className="p-4">
        <p className="text-muted-foreground">Задачи для выполнения когда-нибудь</p>
      </div>
    </ContentWrapper>
  )
}

export default Someday
