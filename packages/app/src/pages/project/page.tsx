import { ContentWrapper } from "@planner/ui-kit/components/content-wrapper";
import { Title } from "../../shared/components/title";
import { useParams } from "@tanstack/react-router";
import { FolderIcon } from "lucide-react";

function Project() {
  const { slug } = useParams({ from: "/project/$slug" });

  return (
    <ContentWrapper>
      <Title content={`Проект: ${slug}`} icon={<FolderIcon />} />
      <div className="p-4">
        <p className="text-muted-foreground">Содержимое проекта {slug}</p>
      </div>
    </ContentWrapper>
  );
}

export default Project;
