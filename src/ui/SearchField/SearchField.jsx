import { LoupeIcon } from 'svg/icons'

import * as S from './SearchField.styled'

export const SearchField = ({ ...props }) => {
	return (
		<S.SearchField>
			<S.SearchFieldInput {...props} />

			<S.ButtonIcon>
				<LoupeIcon />
			</S.ButtonIcon>
		</S.SearchField>
	)
}
