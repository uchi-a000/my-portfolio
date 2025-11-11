import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  experience?: string;
};

const skills: {
  backend: Skill[];
  frontend: Skill[];
  tools: Skill[];
} = {
  backend: [
    { name: "PHP", experience: "実務約6ヶ月/学習含め約2年" },
    { name: "Laravel", experience: "実務約6ヶ月/学習含め約2年" },
    { name: "MySQL", experience: "実務約6ヶ月/学習含め約2年" },
    {
      name: "Docker & Docker Compose",
      experience: "実務約6ヶ月/学習含め約2年",
    },
  ],
  frontend: [
    { name: "JavaScript", experience: "実務約6ヶ月" },
    { name: "TypeScript", experience: "実務約6ヶ月" },
    { name: "Next.js", experience: "実務約6ヶ月" },
    { name: "React", experience: "実務約6ヶ月" },
    { name: "Tailwind CSS", experience: "実務約6ヶ月" },
    { name: "HTML/CSS", experience: "実務約6ヶ月/学習含め約2年" },
  ],
  tools: [
    { name: "VSCode" },
    { name: "GitHub" },
    { name: "Figma" },
    { name: "ChatGPT" },
    { name: "V0" },
    { name: "Notion" },
    { name: "Jira" },
    { name: "Trello" },
  ],
};

export function SkillsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between"
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 text-sm"
                        >
                          {skill.name}
                        </Badge>
                        {skill.experience && (
                          <span className="text-xs text-muted-foreground">
                            {skill.experience}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
