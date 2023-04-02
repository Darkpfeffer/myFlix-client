import {useState } from "react";

export const MainView= () => {
  const [movie, setMovie] = useState([
    {
      _id: 1,
      Title: 'The Karate Kid',
      Description: 'Work causes a single mother to move to China with her young son; in his new home, the boy embraces kung fu, taught to him by a master.',
      Genre: {
        Name: 'Martial Arts',
        Description: 'Martial arts films commonly include hand-to-hand combat along with other types of action, such as stuntwork, chases, and gunfights Sub-genres of martial arts films include kung fu films, wuxia, karate films, and martial arts action comedy films, while related genres include gun fu, jidaigeki and samurai films.'
      },
      Director: {
        Name: 'Harald Zwart',
        Bio: "He was born in Leiden, Netherlands, and his family moved to Norway where he grew up. He made his first film when he was 8 years and was active with Super8 and stop motion animation for years. He was accepted into the highly acclaimed Dutch Film Academy in Amsterdam, NL, where he spent 4 years specializing in Directing, Script and Editing. He met his wife and partner Veslemoey Ruud Zwart and they've worked together since. She started managing his deals and started the company Zwart Arbeid A/S",
        Birthyear: '1965'
      },
      Release_date: '2010',
      ImageURL: 'https://images.moviesanywhere.com/92e403194d518b12a4c5a1e1ee0bb454/5b1c7797-5122-4ee1-98bb-b6ffbcc49ade.jpg'
    },
    {
      _id: 2,
      Title: 'The Matrix',
      Description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      Genre: {
        Name: 'Science Fiction',
        Description: 'Science fiction is a genre of fiction in which the stories often tell about science and technology of the future. It is important to note that science fiction has a relationship with the principles of science—these stories involve partially true- partially fictitious laws or theories of science.'
      },
      Director: {
        Name: 'The Wachowskis',
        Bio: 'They are American film and television directors, writers and producers. have worked as a writing and directing team through most of their careers. They made their directing debut in 1996 with Bound and achieved fame with their second film, The Matrix (1999).',
        Birthyear: [ '1965', '1967' ]
      },
      Release_date: '1999',
      ImageURL: 'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    },
    {
      _id: 3,
      Title: 'Prince of Persia: The Sands of Time',
      Description: 'A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.',
      Genre: {
        Name: 'Action',
        Description: 'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
      },
      Director: {
        Name: 'Mike Newell',
        Bio: 'Three year training course at Granada Television, with intention of going into theatre. Graduated to directing TV plays, building strong reputation for work with David Hare, David Edgar, Hohn, John Osborne, Jack Rosenthal.',
        Birthyear: '1942'
      },
      Release_date: '2010',
      ImageURL: 'https://www.sobrosnetwork.com/wp-content/uploads/2021/04/prince-of-persia-sands-of-time-1200x675-1.png'
    }
  ]);

  if (movie.length=== 0) {
    return <div>The list is empty!</div>
  }
  return (
    <div>
      {movie.map((movie)=> {
        return <div>{movie.Title}</div>
      })}
    </div>
  );
}