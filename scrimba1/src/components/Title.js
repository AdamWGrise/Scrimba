import React from 'react'

class Title extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn:false
        }
    }

    render(){
        let logged
        if (this.state.isLoggedIn) {
            logged = 'in'
        } else {
            logged = 'out'
        }

        let timeOfDay
        const date = new Date()
        const hours = date.getHours()
        
        const styles = {

        }

        if (hours < 12) {
            timeOfDay = 'morning'
            styles.color = '#3A3354'
            styles.backgroundColor = '#E59A83'
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'afternoon'
            styles.color = '#362'
            styles.backgroundColor = 'lightblue'
        } else {
            timeOfDay = 'evening'
            styles.color = '#ffd'
            styles.backgroundColor = '#113'
        }

        return(
            <h1 style={{fontSize: '3rem'}}>Good {timeOfDay}. You are currently logged {logged}.</h1>
        )
    }

}

export default Title