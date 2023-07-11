import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyDetails: []}

  componentDidMount() {
    this.getCryptocurrencyDetails()
  }

  getCryptocurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const details = await response.json()

    const updatedDetails = details.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({isLoading: false, currencyDetails: updatedDetails})
  }

  renderCurrencyDetails = () => {
    const {currencyDetails} = this.state

    return (
      <div className="currency-details-container">
        <div className="header-container">
          <p>Coin Type</p>
          <div className="header-sub-container">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul>
          {currencyDetails.map(eachCurrency => (
            <CryptocurrencyItem currency={eachCurrency} key={eachCurrency.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="currency-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            {this.renderCurrencyDetails()}
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
