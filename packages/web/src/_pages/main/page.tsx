import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper";
import Title from "components/title";

import { Task } from "entity/task";

// import { TestingActionsWithQuery } from "@/entity/user";
import { InboxIcon } from "lucide-react";

async function Main() {
  return (
    <ContentWrapper>
      <Title content="Входящие" icon={<InboxIcon />} />
      {/* <TestingActionsWithQuery /> */}
      <div>
        <Task />
      </div>
    </ContentWrapper>
  );
}

export default Main;
