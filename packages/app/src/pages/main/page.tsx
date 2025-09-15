import { ContentWrapper } from "@/shared/components/content-wrapper";
import { Title } from "@/shared/components/title";
import { Task } from "@/entity/task";
import { InboxIcon } from "lucide-react";

function Main() {
  return (
    <ContentWrapper>
      <Title content="Входящие" icon={<InboxIcon />} />
      <div>
        <Task title="Test" />
      </div>
    </ContentWrapper>
  );
}

export default Main;
