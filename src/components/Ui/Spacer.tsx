interface ISpacer {
  size: 'md' | 'lg' | 'xl'
}

const styles = {
  md: 'mt-8',
  lg: 'mt-8 md:mt-10 xl:mt-16',
  xl: 'mt-8 md:mt-16 xl:mt-24',
}

const Spacer = ({ size }: ISpacer) => {
  return <div className={styles[size]} />
}

export default Spacer
