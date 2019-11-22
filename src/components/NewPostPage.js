import React from 'react';
import Header from './Header';
import NewPostMain from './NewPostMain'

class NewPostPage extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="wrapper">
                    <header>
                        <Header/>
                    </header>
                </div>
                <main>
                    <NewPostMain/>
                </main>
            </div>
        );
    }
}
 
export default NewPostPage;