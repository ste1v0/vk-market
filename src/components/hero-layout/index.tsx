import { observer } from 'mobx-react-lite'
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import HeroLeft from '../hero-left';
import HeroRight from '../hero-right';


function Hero() {

	return (
		<>	<Stack
				display={'flex'}
				direction={{ xs: 'column', sm: 'row' }}
				divider={<Divider orientation="vertical" flexItem/>}
				alignItems={'center'}
			>
				<HeroLeft />
				<HeroRight />
			</Stack>
		</>
	)
}
const HeroLayout = observer(Hero)
export default HeroLayout