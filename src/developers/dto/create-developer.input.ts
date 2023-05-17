export class CreateDeveloperInput {
  firstName: string;
  lastName: string;
  email: string;
  skills: {
    map(arg0: (skill: any) => { language: any; framework: any; }): import("../../graphql").Skill[];
    language: string;
    framework: string;
  };
}
