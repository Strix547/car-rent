import { ArrowDownIcon } from 'svg/icons'

import * as S from './Dropdown.styled'

export const Dropdown = ({ name }) => {
	return (
		<S.Dropdown>
			<span>{name}</span>

			<S.ButtonDrop>
				<ArrowDownIcon />
			</S.ButtonDrop>
		</S.Dropdown>
	)
}
