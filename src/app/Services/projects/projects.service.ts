import { Injectable } from '@angular/core';
import { ProjectModel } from '../../Models/project/projectModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsData: ProjectModel[] = [
    {
      title: "Algorithm Visualizer",
      id: 9,
      developmentPeriod: "July 2022 - October 2022",
      description: "Algorithm Visualizer is an app that visualizes the way that algorithms works. It currently\
                    supports 2 path finding algorithm and 5 sorting algorithms. The algorithms run with the help\
                    of data structures like priority queue, avl etc. The project is made with React.js. My goal for\
                    this project was to implement the knowledge i learnt about Data Structures at university.",
      imagePath: "assets/images/AlgorithmVisualizer.png",
      technologies: ["React", "Javascript", "Html", "Css", "Data Structures", "Algorithms"],
      operations: [
        {
          icon: "fa fa-eye",
          href: "https://dimostheocharis.github.io/AlgorithmsVisualizer/",
          message: "View"
        },
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/AlgorithmVisualizer-code",
          message: "Code"
        }
      ],
      class: "carousel-item active"
    },
    {
      title: "Pokedex",
      id: 8,
      developmentPeriod: "April 2022 - May 2022",
      description: "Pokedex is an online app that display information about pokemons. It consists of 4 screens, \
                    Pokedex, Pokemon, Favorites and Instructions. You can navigate through them by clicking the menu \
                    icon at the top left corner. The screen Favorites support drag and drop system.The basic data for\
                    the pokemons, such as name, id, image, stats etc are fetched from the api POKEAPI. Additional data\
                    such as evolutions and text entries are loaded from json files that were made with python scripts.\
                    These scripts use the technique 'Web Scraping' with the library BeautifulSoup4, to get data from the\
                    official pokemon site, Pokemon.com.",
      imagePath: "assets/images/Pokedex.jpg",
      technologies: ["React", "Javascript", "Html", "Css", "Python", "Web Scraping", "Local Storage", "Algorithms"],
      operations: [
        {
          icon: "fa fa-eye",
          href: "https://dimostheocharis.github.io/Pokedex/#/",
          message: "View"
        },
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/pokedex-code",
          message: "Code"
        }
      ],
      class: "carousel-item"
    },
    {
      title: "Explorer",
      id: 7,
      developmentPeriod: "August 2021 - December 2021",
      description: "My first downloadable game made with python. The goal of the game is to pass all the 30 levels.\
                    During your journey, you will explore new areas (called 'zones' in the game), fight different enemies\
                    and defeat each zones's boss. In order to survive, you have to improve your equipment, such us buy and\
                    upgrade weapons or buy ammo and potions. You can unlock this stuff when you are in a certain level.\
                    Level up by gaining xp killing enemies and bosses. Lucky for you, in most of the levels there are chest\
                    that provide you with ammo and potions.",
      imagePath: "assets/images/Explorer.png",
      technologies: ["Python", "Json"],
      operations: [
        {
          icon: "fa fa-download",
          href: "https://dimos-theocharis.itch.io/explorer",
          message: "Download"
        },
      ],
      class: "carousel-item"
    },
    {
      title: "Chess Platform",
      id: 6,
      developmentPeriod: "January 2022 - March 2022",
      description: "My second downloadable project made with python. Chess Platform is a tool that except the usual \
                    chess interface it provides you with many other features such us creating your own profile, play \
                    custom games (custom color of the chess board and duration), save a game, match history to keep track\
                    of the games that have been played and many more!",
      imagePath: "assets/images/ChessPlatform.png",
      technologies: ["Python", "Json"],
      operations: [
        {
          icon: "fa fa-download",
          href: "https://dimos-theocharis.itch.io/chess-platform",
          message: "Download"
        },
      ],
      class: "carousel-item"
    },
    {
      title: "Task List",
      id: 5,
      developmentPeriod: "January 2021",
      description: "Α programming tool made with Javascript/Html/Css that lets you organize your daily plan. Put the\
                    tasks you wanna achieve daily/monthly or yearly and save them to unique days or frequently-used \
                    routines. Also, there is a filter that lets you seperate your taks to completed and uncompleted ones.\
                    Lastly, the statistics section provifes usefull information about your tasks.",
      imagePath: "assets/images/MyTaskList.png",
      technologies: ["Html", "Css", "Javascript", "Local Storage"],
      operations: [
        {
          icon: "fa fa-eye",
          href: "https://dimostheocharis.github.io/myTaskList/",
          message: "View"
        },
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/myTaskList",
          message: "Code"
        }
      ],
      class: "carousel-item"
    },
    {
      title: "Snake.io",
      id: 4,
      developmentPeriod: "October 2020 - November 2022",
      description: "A fully completed snake game with a lot of differences from the normal version, such as obstacles,\
                    levels, golden apples, coins, shop etc made with Javascript, Html,Css. Start the game with the custom\
                    skin and gather coins to buy more rare skins...",
      imagePath: "assets/images/Snake.io.png",
      technologies: ["Html", "Css", "Javascript", "Local Storage"],
      operations: [
        {
          icon: "fa fa-eye",
          href: "https://dimostheocharis.github.io/Snake.io/StartingScreen.html",
          message: "View"
        },
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/Snake.io",
          message: "Code"
        }
      ],
      class: "carousel-item"
    },
    {
      title: "Drawnar.io",
      id: 3,
      developmentPeriod: "August 2020 - September 2020",
      description: "A drawing project made with pygame. Draw your own paintings on 2 different-sized grids, playing\
                    around with 4 unique drawing features, and save them to your files so as never to lose them...",
      imagePath: "assets/images/Drawnar.io.png",
      technologies: ["Python", "Json"],
      operations: [
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/Drawnar.io",
          message: "Code"
        }
      ],
      class: "carousel-item"
    },
    {
      title: "Hangman",
      id: 2,
      developmentPeriod: "July 2020",
      description: "Hangman is my first project that got developed in a 24-hour-challenge. Specifically, i came up with \
                    the idea, and tried my best to complete the project as fast as possible, so i finished it in a day.\
                    Hangman is a simple self-made hangman game, made with python and pygame. You have 5 chances to achieve\
                    your mission. Find the word by clicking the buttons on the screen and save the little human, or let\
                    him suffer...",
      imagePath: "assets/images/Hangman.jpg",
      technologies: ["Python"],
      operations: [],
      class: "carousel-item"
    },
    {
      title: "Space Invaders",
      id: 1,
      developmentPeriod: "May 2020 - June 2020",
      description: "My first pygame-made game, and also my favorite one. Move your spaceship, don't let enemies reach \
                    earth, and buy items and enhacements from store to become faster, and stronger... You have a spaceship\
                    and your duty is to protect the earth from increasing alien attack by shooting at them. Every wave will\
                    be stronger than the previous one and in some waves a boss will be appeared. Will you surive ?\ ",
      imagePath: "assets/images/SpaceInvaders.jpg",
      technologies: ["Python"],
      operations: [
        {
          icon: "fa fa-code",
          href: "https://github.com/DimosTheocharis/SpaceInvaders",
          message: "Code"
        }
      ],
      class: "carousel-item"
    },
  ]

  constructor() { }

  public getProjects(): ProjectModel[] {
    return this.projectsData;
  }
}
