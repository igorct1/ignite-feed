import React from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/igorct1.png",
      name: "Igor Tozetti",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraaaa! ✋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-01 :00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO at Rockeseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraaaa! ✋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-03 18:00:00"),
  },
];

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
};
