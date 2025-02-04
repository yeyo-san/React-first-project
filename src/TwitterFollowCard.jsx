import { useState } from "react"

export default function TwitterFollowCard( {userName, name} ){
    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
       setIsFollowing(!isFollowing) 
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={imageSrc} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'
                    >@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                      {text}
                </button>
            </aside>
        </article>
    )
}