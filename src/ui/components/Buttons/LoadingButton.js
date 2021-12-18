import React from 'react'
import { BeatLoader } from 'react-spinners';
export default function LoadingButton({ children, onClick, disabled, ...props }) {
    const [loading, setLoading] = React.useState(false);
    return (
        <button
            onClick={
                loading ?
                    () => { }
                    :
                    (e) => {
                        setLoading(true);
                        onClick(e);
                    }
            }
            disabled={loading || disabled}
            {...props}
        >
            {
                loading ?
                    <div className='button-loadingContent'>
                        <BeatLoader />
                    </div> :
                    children
            }
        </button>
    )
}
