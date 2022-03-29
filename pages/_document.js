import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {   
    return renderPage();
  }

  render () {    
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet"></link>
        </Head>        
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}