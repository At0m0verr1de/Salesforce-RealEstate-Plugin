import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const width = '84'
const height = '16'
const viewBox = '0 0 84 16'

const sizes = {}

// somehow sizes is ending up in markup, even if it is not a valid svg attribute
// until we have a better solution, just render it empty, instead to '[Object object]'
Object.defineProperty(sizes, 'toString', { value: () => '', enumerable: false })

const getDimensions = (size, sizes) => {
  if (size && typeof size.width === 'number' && typeof size.height === 'number') {
    return size
  }
  return size && sizes[size]
    ? sizes[size]
    : { width, height }
}

const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
  if (noStyles) { return '' }
  const dimensions = getDimensions(size, sizes)
  const fillRule = fillColor && fillColorRule ? `${fillColorRule}{ fill: ${fillColor}; }` : ''
  return css`
    width: ${dimensions.width}px;
    height: ${dimensions.height}px;
    ${fillRule}
  `
}

const propsToCss = ({
  size,
  sizes,
  fillColor,
  fillColorRule,
  noStyles
}) => getCss(size, sizes, fillColor, fillColorRule, noStyles)

const Image = styled.svg`${propsToCss}`

const children = (
  <Fragment>
    <g
      fill='none'
      fillRule='evenodd'
      key='key-0'
    >
      <path
        fill='#FEC008'
        fillRule='nonzero'
        d='M0 0h84v16H0z'
      />
      <path
        fill='#000'
        d='M7.164 13a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132V4.78c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h2.844c.832 0 1.496.218 1.992.654.496.436.744 1.018.744 1.746v3.6c0 .728-.248 1.31-.744 1.746-.496.436-1.16.654-1.992.654H7.164zm.972-1.056c0 .04.02.06.06.06h1.86c.464 0 .834-.142 1.11-.426.276-.284.418-.666.426-1.146V7.168c0-.48-.138-.862-.414-1.146-.276-.284-.65-.426-1.122-.426h-1.86c-.04 0-.06.02-.06.06v6.288zm9.304-5.148c.488 0 .914.086 1.278.258.364.172.644.412.84.72.196.308.294.658.294 1.05v3.996c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-.792a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132v-.336c0-.024-.008-.04-.024-.048s-.032-.004-.048.012c-.224.208-.49.368-.798.48a2.91 2.91 0 0 1-1.002.168c-.584 0-1.064-.15-1.44-.45-.376-.3-.564-.754-.564-1.362 0-.624.218-1.114.654-1.47.436-.356 1.046-.534 1.83-.534h1.332c.04 0 .06-.02.06-.06v-.312c0-.352-.102-.626-.306-.822-.204-.196-.514-.294-.93-.294-.328 0-.594.06-.798.18a.85.85 0 0 0-.402.504c-.032.104-.1.152-.204.144l-.864-.108a.25.25 0 0 1-.132-.054.101.101 0 0 1-.036-.102c.072-.456.33-.83.774-1.122.444-.292.99-.438 1.638-.438zm-.324 5.328a1.87 1.87 0 0 0 1.11-.336c.316-.224.474-.508.474-.852v-.696c0-.04-.02-.06-.06-.06h-1.116c-.472 0-.848.092-1.128.276a.87.87 0 0 0-.42.768c0 .296.106.52.318.672.212.152.486.228.822.228zm8.212-4.464c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-1.224c-.04 0-.06.02-.06.06v3.132c0 .344.074.588.222.732.148.144.386.216.714.216h.288c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v.624c0 .112-.06.176-.18.192l-.492.012c-.616 0-1.076-.108-1.38-.324-.304-.216-.456-.62-.456-1.212V7.9c0-.04-.02-.06-.06-.06h-.66a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132v-.588c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.66c.04 0 .06-.02.06-.06V5.488c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.744c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v1.344c0 .04.02.06.06.06h1.224c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v.588zm4.84 4.452c.648-.008 1.112-.26 1.392-.756.04-.072.084-.108.132-.108.04 0 .076.012.108.036l.492.3c.064.04.096.092.096.156l-.024.096c-.216.392-.522.7-.918.924-.396.224-.858.336-1.386.336-.568 0-1.048-.126-1.44-.378-.392-.252-.688-.614-.888-1.086-.2-.488-.3-1.06-.3-1.716 0-.584.044-1.028.132-1.332.144-.552.432-.988.864-1.308.432-.32.956-.48 1.572-.48.76 0 1.34.198 1.74.594.4.396.66.97.78 1.722.04.296.068.656.084 1.08 0 .12-.06.18-.18.18h-3.792c-.04 0-.06.02-.06.06.016.304.044.52.084.648.088.32.264.572.528.756.264.184.592.276.984.276zM30 7.792c-.352 0-.638.084-.858.252-.22.168-.37.4-.45.696-.056.176-.092.4-.108.672 0 .04.02.06.06.06h2.724c.04 0 .06-.02.06-.06a3.513 3.513 0 0 0-.072-.588 1.361 1.361 0 0 0-.474-.75c-.236-.188-.53-.282-.882-.282zm11.192 5.304c-.6 0-1.124-.096-1.572-.288-.448-.192-.794-.464-1.038-.816a2.115 2.115 0 0 1-.366-1.236v-.288c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.768c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v.228c0 .408.176.744.528 1.008.352.264.82.396 1.404.396.552 0 .968-.116 1.248-.348.28-.232.42-.536.42-.912a.972.972 0 0 0-.216-.636 2.059 2.059 0 0 0-.63-.486 12.046 12.046 0 0 0-1.206-.534 12.187 12.187 0 0 1-1.386-.612 2.563 2.563 0 0 1-.846-.726c-.224-.3-.336-.678-.336-1.134 0-.688.246-1.228.738-1.62.492-.392 1.158-.588 1.998-.588.592 0 1.112.1 1.56.3.448.2.794.48 1.038.84s.366.776.366 1.248v.18c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-.78a.194.194 0 0 1-.132-.042.144.144 0 0 1-.048-.114v-.144c0-.416-.166-.762-.498-1.038-.332-.276-.79-.414-1.374-.414-.496 0-.88.102-1.152.306-.272.204-.408.498-.408.882 0 .264.068.48.204.648.136.168.338.318.606.45.268.132.678.302 1.23.51.568.224 1.028.43 1.38.618.352.188.644.436.876.744.232.308.348.69.348 1.146 0 .456-.116.856-.348 1.2-.232.344-.568.612-1.008.804-.44.192-.956.288-1.548.288zm5.992-7.116a.796.796 0 0 1-.57-.21.717.717 0 0 1-.222-.546c0-.224.074-.406.222-.546a.796.796 0 0 1 .57-.21c.232 0 .42.07.564.21.144.14.216.322.216.546a.728.728 0 0 1-.216.546.775.775 0 0 1-.564.21zM46.788 13a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132V7.072c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.792c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v5.748c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-.792zm7.492-5.928c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.792c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v5.616c0 .96-.274 1.65-.822 2.07-.548.42-1.278.63-2.19.63a8.94 8.94 0 0 1-.552-.024c-.112 0-.168-.064-.168-.192l.024-.708c0-.056.02-.1.06-.132a.18.18 0 0 1 .144-.036c.112.008.268.012.468.012.664 0 1.144-.126 1.44-.378.296-.252.444-.678.444-1.278v-.204c0-.024-.008-.038-.024-.042-.016-.004-.032.002-.048.018-.344.384-.832.576-1.464.576-.52 0-.99-.136-1.41-.408-.42-.272-.71-.672-.87-1.2-.104-.352-.156-.84-.156-1.464 0-.664.06-1.176.18-1.536.152-.48.422-.866.81-1.158.388-.292.846-.438 1.374-.438.656 0 1.168.196 1.536.588.016.024.032.032.048.024s.024-.024.024-.048v-.288zm-.072 3.972c.024-.128.042-.264.054-.408.012-.144.018-.384.018-.72a9.62 9.62 0 0 0-.018-.714 2.555 2.555 0 0 0-.066-.402 1.27 1.27 0 0 0-.432-.726c-.224-.188-.504-.282-.84-.282-.336 0-.616.094-.84.282-.224.188-.384.43-.48.726-.088.24-.132.612-.132 1.116 0 .552.04.928.12 1.128a1.334 1.334 0 0 0 1.332 1.008c.352 0 .638-.094.858-.282.22-.188.362-.43.426-.726zm6.556-4.236c.656 0 1.176.19 1.56.57.384.38.576.894.576 1.542v3.9c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-.792a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132V9.148c0-.4-.116-.724-.348-.972-.232-.248-.54-.372-.924-.372-.344 0-.634.102-.87.306-.236.204-.374.478-.414.822v3.888c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048h-.792a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132V7.072c0-.056.016-.1.048-.132a.178.178 0 0 1 .132-.048h.792c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v.336c0 .024.008.04.024.048s.028.004.036-.012c.336-.424.84-.636 1.512-.636zm7.348 5.304c.648-.008 1.112-.26 1.392-.756.04-.072.084-.108.132-.108.04 0 .076.012.108.036l.492.3c.064.04.096.092.096.156l-.024.096c-.216.392-.522.7-.918.924-.396.224-.858.336-1.386.336-.568 0-1.048-.126-1.44-.378-.392-.252-.688-.614-.888-1.086-.2-.488-.3-1.06-.3-1.716 0-.584.044-1.028.132-1.332.144-.552.432-.988.864-1.308.432-.32.956-.48 1.572-.48.76 0 1.34.198 1.74.594.4.396.66.97.78 1.722.04.296.068.656.084 1.08 0 .12-.06.18-.18.18h-3.792c-.04 0-.06.02-.06.06.016.304.044.52.084.648.088.32.264.572.528.756.264.184.592.276.984.276zm-.168-4.32c-.352 0-.638.084-.858.252-.22.168-.37.4-.45.696-.056.176-.092.4-.108.672 0 .04.02.06.06.06h2.724c.04 0 .06-.02.06-.06a3.513 3.513 0 0 0-.072-.588 1.361 1.361 0 0 0-.474-.75c-.236-.188-.53-.282-.882-.282zM76.72 4.78c0-.056.016-.1.048-.132A.178.178 0 0 1 76.9 4.6h.792c.056 0 .1.016.132.048a.178.178 0 0 1 .048.132v8.04c0 .056-.016.1-.048.132a.178.178 0 0 1-.132.048H76.9a.178.178 0 0 1-.132-.048.178.178 0 0 1-.048-.132v-.312c0-.024-.008-.04-.024-.048s-.032-.004-.048.012c-.176.2-.382.354-.618.462a1.838 1.838 0 0 1-.774.162c-.576 0-1.054-.142-1.434-.426-.38-.284-.658-.686-.834-1.206-.144-.4-.216-.912-.216-1.536 0-.584.06-1.068.18-1.452.168-.528.446-.94.834-1.236.388-.296.878-.444 1.47-.444.28 0 .538.052.774.156.236.104.442.256.618.456.016.016.032.022.048.018s.024-.018.024-.042V4.78zm-.3 6.672c.192-.352.288-.856.288-1.512s-.104-1.168-.312-1.536c-.232-.408-.572-.612-1.02-.612-.464 0-.82.192-1.068.576-.256.4-.384.928-.384 1.584 0 .616.1 1.112.3 1.488.232.44.616.66 1.152.66.456 0 .804-.216 1.044-.648z'
      />
    </g>
  </Fragment>
)

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: '&&& path, &&& use, &&& g',
  sizes,
  size: null
}

const propTypes = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  })
}

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  propTypes,
  displayName: 'DateSigned'
})
