import React from 'react'
import NewQuote from '../NewQuote/NewQuote'
import Button from '../Button/Button'
import QuoteText from './components/QuoteText/QuoteText'
import QuoteAuthor from './components/QuoteAuthor/QuoteAuthor'
import { copyToClipboard } from '../../utils/helpers/copyToClipboard'
import { speechQuote } from '../../utils/helpers/speechQuote'
import { generateTweetUrl } from '../../utils/helpers/generateTweetUrl'
import styles from './QuoteBox.module.css'

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <main className={styles.quoteBox} id="quote-box">
      <header>
        <h1>Quote of the Day</h1>

        <section className={styles.quote}>
          <QuoteText text={quote.text} />
          <QuoteAuthor author={quote.author} />
        </section>

        <footer className={styles.features}>
          <ul>
            <li>
              <Button onClick={() => speechQuote(quote.text, quote.author)}>
                <i className="bx bxs-volume-full bx-sm" />
              </Button>
            </li>
            <li>
              <Button onClick={copyToClipboard(quote.text, quote.author)}>
                <i className="bx bxs-copy bx-sm" />
              </Button>
            </li>
            <li>
              <Button
                linkProps={{
                  id: 'tweet-quote',
                  href: generateTweetUrl(quote.text, quote.author),
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }}
              >
                <i className="bx bxl-twitter bx-sm" />
              </Button>
            </li>
          </ul>

          <NewQuote handleNewQuote={handleNewQuote} />
        </footer>
      </header>
    </main>
  )
}

export default QuoteBox
