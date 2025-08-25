import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper"
import { Title } from "../../shared/components/title"
import { TrashIcon } from "lucide-react"

function Trash() {
  return (
    <ContentWrapper>
      <Title content="Корзина" icon={<TrashIcon />} />
      <div className="p-4">
        <p className="text-muted-foreground">Удаленные элементы</p>
      </div>
    </ContentWrapper>
  )
}

export default Trash
