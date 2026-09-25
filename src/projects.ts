export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string | null;
}

const projects: Project[] = [
  {
    title: 'DefineIt',
    description: 'A collaborative mobile dictionary application featuring\
     RESTful API integration for instant definitions, dynamic word search,\
     and local persistence for offline vocabulary review.',
    tags: ['Java', 'Android Studio'],
    link: 'https://github.com/christM103/UML_COMP4630-Final_Project',
    image: null,
  },
  {
    title: 'Tumbling Box Numerical Methods',
    description: 'A computational simulation modeling rigid body rotational\
     dynamics and chaotic motion, implementing high-order differential equation\
     solvers to visualize tumbling stability.',
    tags: ['Python', 'NumPy', 'C++', 'OpenGL', ],
    link: 'https://github.com/Mango182/tumbling-box-numerical-methods',
    image: null,
  },
  {
    title: 'CareerLog',
    description: 'A cross-platform mobile tracker designed to organize job\
     applications, manage interview timelines, and monitor candidate outreach\
     with persistent offline support.',
    tags: ['React Native', 'TypeScript', 'Expo', ],
    link: 'https://github.com/Mango182/CareerLog',
    image: null,
  },
  {
    title: 'HabitQuest',
    description: 'A gamified mobile application to reinforce positive habits\
     through positive and negative score mechanics and local data persistence.',
    tags: ['Flutter', 'Dart'],
    link: 'https://github.com/Shades4355/Habit_Quest',
    image: null,
  },
  {
    title: 'dfa-gen',
    description: 'A tool for generating deterministic finite automata (DFA)\
     from regular expressions, facilitating the study and application of formal\
     languages and automata theory.',
    tags: ['Python'],
    link: 'https://github.com/Mango182/dfa-gen',
    image: null
  }
];

export default projects;