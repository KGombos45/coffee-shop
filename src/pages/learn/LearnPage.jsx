import React from 'react'
import LearnBottom from './learnbottom/LearnBottom'
import LearnMid from './learnmid/LearnMid'
import LearnTickets from './learntickets/LearnTickets'
import LearnTop from './learntop/LearnTop'

function LearnPage() {
    return (
        <div>
            <LearnTop />
            <LearnMid />
            <LearnTickets />
            <LearnBottom />
        </div>
    )
}

export default LearnPage
