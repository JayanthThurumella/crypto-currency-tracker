import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  return (
    <li className="header-list-container">
      <div className="header-list-sub-container-1">
        <img
          src={currency.currencyLogo}
          alt={currency.currencyName}
          className="logo"
        />
        <p>{currency.currencyName}</p>
      </div>

      <div className="header-list-sub-container-2">
        <p>{currency.usdValue}</p>
        <p>{currency.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
