import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiOpenapiinitiative,
  SiPython,
  SiCplusplus,
  SiDart,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiLinux,
  SiCmake,
  SiGithubactions,
  SiFlutter,
  SiAndroid,
  SiSqlite,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

export interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

export const frontEndSkills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, color: 'rgb(227, 79, 38)' },
  { name: 'CSS', icon: SiCss, color: 'rgb(21, 114, 182)' },
  { name: 'JavaScript', icon: SiJavascript, color: 'rgb(247, 223, 30)' },
  { name: 'React', icon: SiReact, color: 'rgb(97, 218, 251)' },
  { name: 'TypeScript', icon: SiTypescript, color: 'rgb(49, 120, 198)' },
];

export const backEndSkills: Skill[] = [
  { name: 'RESTful APIs', icon: SiOpenapiinitiative, color: 'rgb(107, 165, 57)' },
  { name: 'SQLite', icon: SiSqlite, color: 'rgb(0, 59, 90)' },
];

export const languages: Skill[] = [
  { name: 'Python', icon: SiPython, color: 'rgb(55, 118, 171)' },
  { name: 'Java', icon: DiJava, color: 'rgb(237, 139, 0)' },
  { name: 'C/C++', icon: SiCplusplus, color: 'rgb(0, 89, 156)' },
  { name: 'Dart', icon: SiDart, color: 'rgb(1, 117, 194)' },
  { name: 'JavaScript', icon: SiJavascript, color: 'rgb(247, 223, 30)' },
];

export const tools: Skill[] = [
  { name: 'Git', icon: SiGit, color: 'rgb(240, 80, 50)' },
  { name: 'Docker', icon: SiDocker, color: 'rgb(36, 150, 237)' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'rgb(50, 108, 229)' },
  { name: 'Firebase', icon: SiFirebase, color: 'rgb(255, 202, 40)' },
  { name: 'Linux', icon: SiLinux, color: 'rgb(252, 198, 36)' },
  { name: 'VS Code', icon: VscVscode, color: 'rgb(0, 122, 204)' },
  { name: 'CMake', icon: SiCmake, color: 'rgb(6, 79, 139)' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'rgb(32, 136, 255)' },
];

export const MobileSkills: Skill[] = [
  { name: 'Flutter', icon: SiFlutter, color: 'rgb(1, 117, 194)' },
  { name: 'Android', icon: SiAndroid, color: 'rgb(3, 244, 75)' },
  { name: 'React Native', icon: SiReact, color: 'rgb(97, 218, 251)' }
];