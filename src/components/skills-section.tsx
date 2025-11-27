import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SKILL_LEVEL_MAX = 5;
const SKILL_LEVELS = Array.from({ length: SKILL_LEVEL_MAX }, (_, i) => i + 1);

type Skill = {
  name: string;
  level?: number;
  experience?: string;
};

const skills: {
  backend: Skill[];
  frontend: Skill[];
  tools: Skill[];
} = {
  backend: [
    { name: "PHP", level: 3, experience: "6ヶ月" },
    { name: "Laravel", level: 3, experience: "6ヶ月" },
    { name: "MySQL", level: 3, experience: "6ヶ月" },
    {
      name: "Docker & Docker Compose",
      level: 3,
      experience: "6ヶ月",
    },
  ],
  frontend: [
    { name: "JavaScript", level: 3, experience: "6ヶ月" },
    { name: "TypeScript", level: 2, experience: "6ヶ月" },
    { name: "Next.js", level: 3, experience: "6ヶ月" },
    { name: "React", level: 3, experience: "6ヶ月" },
    { name: "Tailwind CSS", level: 2, experience: "6ヶ月" },
    { name: "HTML/CSS", level: 4, experience: "6ヶ月" },
  ],
  tools: [
    { name: "VSCode" },
    { name: "Cursor" },
    { name: "GitHub" },
    { name: "Figma" },
    { name: "Notion" },
    { name: "Jira" },
    { name: "Trello" },
  ],
};

function SkillLevel({ level = 0 }: { level?: number }) {
  return (
    <div className="flex gap-1">
      {SKILL_LEVELS.map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

const levelDescriptions = [
  {
    level: 5,
    text: "実務で問題なく使用でき、他者に教えられるレベル",
  },
  {
    level: 4,
    text: "実務で自立して使用でき、応用的な実装も可能",
  },
  {
    level: 3,
    text: "実務で基本的な実装が可能で、サポートがあれば応用も対応可能",
  },
  {
    level: 2,
    text: "基礎的な理解があり、簡単なタスクを実装できる",
  },
  {
    level: 1,
    text: "学習を開始したばかりで、基本的な概念を理解している段階",
  },
];

export function SkillsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
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
                  {category !== "tools" && (
                    <div className="flex justify-end font-medium text-sm mb-2 border-b border-border pb-1">
                      <span>実務経験</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    {skillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex justify-between items-center"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          {skill.level && <SkillLevel level={skill.level} />}
                        </div>
                        {skill.experience &&
                          skill.level &&
                          category !== "tools" && (
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

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-muted/30 border-2">
              <CardHeader>
                <CardTitle className="text-lg text-center">
                  スキルレベルの基準
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 text-sm">
                  {levelDescriptions.map(({ level, text }) => (
                    <div key={level} className="flex items-start gap-3">
                      <div className="mt-1">
                        <SkillLevel level={level} />
                      </div>
                      <p>
                        <span className="font-semibold">レベル{level}:</span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
