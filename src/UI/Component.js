import React from 'react'
import classes from "./Component.module.scss"
export default function Component({ title }) {
    return (
        <div className={classes.card}>
            {title}
        </div>
    )
}
