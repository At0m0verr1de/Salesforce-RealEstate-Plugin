import React from 'react'
import styled, { css } from 'styled-components'

const width = '24'
const height = '24'
const viewBox = '0 0 24 24'

const getDimensions = () => ({
  height,
  width
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({ noStyles }) => (!noStyles ? getDimensionsCss() : null)};
`

const defaultProps = {
  children: [
    <path
      d="M12.744 14.474l.17.053c2.742.867 4.215 1.515 4.852 2.317.403.509.534 1.097.36 1.648-.194.621-.742 1.075-1.49 1.246-1.523.352-3.33.465-6.535.465-3.21 0-5.013-.113-6.536-.465-.747-.171-1.296-.625-1.49-1.246-.173-.552-.042-1.14.36-1.647.637-.803 2.11-1.452 4.852-2.318l.17-.053a5.197 5.197 0 0 0-.306-.56l-.064-.106c-.374-.614-.471-.837-.583-1.442a1.36 1.36 0 0 0-.23-.466c-.41-.455-.704-1.783-.487-2.484.01-.036.034-.094.065-.162a2.632 2.632 0 0 0 .057-.13 1.46 1.46 0 0 0 .03-.082.448.448 0 0 0 .027-.11c-.052-.828.024-1.6.228-2.295.3-1.026 1.16-1.946 2.198-2.355C8.948 4.062 9.422 4 10.1 4c.68 0 1.152.063 1.709.282 1.037.409 1.897 1.33 2.198 2.355.204.693.28 1.465.227 2.295 0 .012.008.054.027.11a1.468 1.468 0 0 0 .03.082 2.738 2.738 0 0 0 .057.13c.031.068.055.126.066.163.216.7-.077 2.028-.488 2.482a1.363 1.363 0 0 0-.23.466c-.077.42-.166.694-.313.978a7.05 7.05 0 0 1-.27.466l-.064.106c-.144.235-.243.42-.305.559zm4.084 3.563c.017-.054-.022-.154-.11-.266-.44-.554-1.919-1.142-4.195-1.86-.436-.138-.54-.173-.632-.216a1.009 1.009 0 0 1-.548-.655c-.146-.526.052-1.078.556-1.905l.064-.107c.285-.467.319-.546.392-.939.068-.373.313-.888.564-1.164.103-.153.25-.842.21-1.018-.192-.417-.282-.711-.259-1.073.042-.652-.016-1.248-.17-1.77-.174-.597-.728-1.178-1.37-1.43-.377-.15-.703-.191-1.23-.191s-.852.041-1.23.19c-.641.253-1.194.833-1.37 1.431-.153.523-.21 1.119-.17 1.77.018.271-.039.541-.148.82a3.784 3.784 0 0 1-.1.231c-.051.202.1.89.195 1.033.258.284.5.8.57 1.17.072.395.106.473.39.94l.065.105c.504.826.703 1.38.557 1.906-.082.296-.277.53-.55.657-.091.042-.198.078-.63.215-2.276.717-3.756 1.306-4.195 1.86-.089.112-.128.212-.111.268.03.099.197.223.484.29 1.409.325 3.136.431 6.243.431s4.834-.106 6.244-.432c.287-.066.453-.19.484-.29zm4.744-2.206c.338.427.452.944.304 1.416-.167.53-.627.916-1.251 1.06-.39.09-.824.16-1.323.214-.04.004-.04.004-.074.005-.353 0-.646-.284-.68-.65-.037-.394.232-.75.61-.79.454-.05.838-.112 1.175-.19a.647.647 0 0 0 .24-.099c-.014.017-.028-.012-.05-.038a1.387 1.387 0 0 0-.359-.279c-.29-.173-.706-.36-1.218-.555a25.708 25.708 0 0 0-1.515-.519c-.352-.11-.423-.135-.501-.17a.936.936 0 0 1-.507-.607c-.127-.457.032-.915.439-1.585l.05-.082c.207-.339.223-.376.274-.65.055-.304.243-.71.441-.932.07-.124.162-.552.152-.622-.152-.334-.225-.584-.206-.888a3.707 3.707 0 0 0-.12-1.277c-.118-.402-.498-.797-.937-.97-.264-.104-.494-.133-.873-.133-.18 0-.315.006-.448.023-.38.051-.72-.235-.765-.63-.045-.39.217-.752.593-.802.199-.026.384-.035.62-.035.536 0 .91.05 1.352.224.843.332 1.518 1.056 1.764 1.895.16.547.22 1.153.18 1.788 0 0 .018.06.068.169.027.058.048.111.06.148.183.592-.06 1.668-.409 2.053a.928.928 0 0 0-.13.264c-.09.485-.173.676-.466 1.156l-.032.053a5.804 5.804 0 0 0-.144.247c2.064.655 3.183 1.155 3.686 1.788z"
      key="key-0"
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'IconInPerson'
})
