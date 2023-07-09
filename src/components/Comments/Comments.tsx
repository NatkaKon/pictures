import React, {FC, FormEvent,useState} from 'react';
import s from './Comments.module.css'

type CommentType = {
    id: number
    text: string
}

export const Comments: FC = () => {

    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState<CommentType[]>([]);
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newComment: CommentType = {
            id: comments.length + 1,
            text: commentText,
        };
        if (newComment.text.trim() !== '') {
            setComments([...comments, newComment]);
            setCommentText('');
        } else {
            setError('Please, add comment...')
        }
    }

    const onKeyPressHandler = () => {
        setError(null)
    }

    return (
        <div>
            <h4>Create comments</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.currentTarget.value)}
                    onKeyPress={onKeyPressHandler}
                    className={error ? s.error : ''}
                />
                <button type="submit">Add</button>
                {error && <div className={s.errorMessage}>{error}</div>}
            </form>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

