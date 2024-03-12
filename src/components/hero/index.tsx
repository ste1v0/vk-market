import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import './style.css'
function Hero() {

	return (
		<>
			<Stack
				className="hero__container"
				direction={{ xs: 'column', sm: 'row' }}
				divider={<Divider orientation="vertical" flexItem/>}
				useFlexGap
			>
				<span className="hero__item left">Item 1</span>
				<span className="hero__item right">Item 2</span>
			</Stack>
		</>
	)
}

export default Hero