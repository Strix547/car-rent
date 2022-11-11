import Image from 'next/image'

import { SearchField, Dropdown, Chip } from 'ui'
import { PowerRoundedIcon, ArrowDownIcon, PlusIcon } from 'svg/icons'

import * as S from './Header.styled'

import avatarSrc from 'public/img/avatar.png'

export const Header = () => {
	const tabs = ['История аренды', 'Штрафы', 'Транзакции', 'Реквизиты']

	const tabItems = tabs.map((name) => {
		return (
			<S.TabItem key={name}>
				<button>{name}</button>
			</S.TabItem>
		)
	})

	return (
		<S.Header>
			<S.Top>
				<SearchField name="search" placeholder="Введите запрос поиска" />

				<S.Clock>
					<PowerRoundedIcon />
					<span>02:47</span>
				</S.Clock>

				<S.User>
					<Image src={avatarSrc} alt="Пользователь" />
					<span>Хабибаржалаев Нурмагомед</span>

					<button>
						<ArrowDownIcon />
					</button>
				</S.User>
			</S.Top>

			<S.Bottom>
				<S.BottomLeft>
					<Dropdown name="Хабибаржалаев Н.Д." />

					<S.Divider />

					<Dropdown name="Баланс: 5000 ₽" />

					<S.Divider />

					<S.JobList>
						<Chip name="Водитель" />

						<Chip name="Собственник" />

						<S.AddJob>
							<S.AddJobIcon>
								<button>
									<PlusIcon />
								</button>
							</S.AddJobIcon>

							<span>Поставщик</span>
							<span>
								Сотрудник
								<button>
									<ArrowDownIcon />
								</button>
							</span>
						</S.AddJob>
					</S.JobList>
				</S.BottomLeft>

				<S.Tabs>{tabItems}</S.Tabs>
			</S.Bottom>
		</S.Header>
	)
}
