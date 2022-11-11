import { CrossIcon } from 'svg/icons'

import * as S from './Chip.styled'

export const Chip = ({ name }) => {
	return (
		<S.Chip>
			<span>{name}</span>

			<S.ButtonClose>
				<CrossIcon />
			</S.ButtonClose>
		</S.Chip>
	)
}
