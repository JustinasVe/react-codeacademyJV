import styles from './home-page.module.scss'

export const HomePage = () => {
    const homePageStyles= {
        color: 'green',
        backgroundColor: 'blue',
        padding: '1px 2px'
    }

    console.log(styles)

    return ( 
        <div style={homePageStyles} >
            <h1 className={styles.title} >HomePage</h1>
        </div>
    )
}