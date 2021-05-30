import React from 'react';
const List = (props) => {
    const myList = props.friends
    return (
        <div>
            <section className="container">
            
        <h3 className="birthday-count">{myList.length} birthdays today</h3> 
                {myList.map((friend) =>
                    <div key={friend.id} style={{ display: 'inline-flex' }}>
                        <img src={friend.image} className="image"></img>
                        <div>
                            <h4> {friend.name}</h4>
                            <p className="age">{friend.age} years</p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default List;