import { Accordion } from "@/components/ui/accordion";
import ModuleItem from "./ModuleItem";

export default function Modules() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <ModuleItem title="Redux" moduleIndex={0} amountOfLessons={12} />
      <ModuleItem title="Redux" moduleIndex={1} amountOfLessons={12} />
      <ModuleItem title="Redux" moduleIndex={2} amountOfLessons={12} />
    </Accordion>
  );
}
