import './Links.css';

const Links = () => {
    return (
        <div className='content-area'>
            <div className='links-layout'>
                <div className='links-left'>
                    <h2>Info</h2>
                    <a href='https://aws.amazon.com/getting-started/hands-on/host-static-website/' target="_blank" rel="noopener noreferrer">AWS - Host a Static Website</a>
                    <a href='https://www.jenkins.io/doc/book/getting-started/' target="_blank" rel="noopener noreferrer">Jenkins - Getting Started</a>
                </div>
                <div className='links-right'>
                    <h2>Resources</h2>
                    <a href='https://www.react-icons.com/icons/fa' target="_blank" rel="noopener noreferrer">React Icons</a>
                </div>                
            </div>
        </div>
    )
}

export default Links;