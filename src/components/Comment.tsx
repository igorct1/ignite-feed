import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleNewLike() {
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/igorct1.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Tozetti</strong>
              <time title="11 de maio às 8h13h" dateTime="2023-05-11 08:15:30">
                Cerca de 1h atrás.
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
