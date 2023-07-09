import {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import s from './Comments.module.css'

type CommentsPropsType = {
    onAddComment: (comment: string) => void
}

export const Comments:FC<CommentsPropsType> = ({onAddComment}) => {
    const [comment, setComment] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addComment()
        }
    }

    const addComment = () => {
        if (comment.trim() !== '') {
            onAddComment(comment.trim());
            setComment('');
        } else {
            setError('Please, add comment')
        }
    };

    return (
        <div>
            <input
                type={'text'}
                value={comment}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error? s.error :''}
            />
            <button onClick={addComment}>+</button>
            {error&& <div className={s.errorMessage}>{error}</div>}
        </div>
    );
};

