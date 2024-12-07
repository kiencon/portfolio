import AnchorButton from '../AnchorButton';

const MyResume = ({ title = 'My resume' }: { title?: string }) => (
  <AnchorButton
    name={title}
    href='https://www.vsondev.com/resume/VietSonBui.pdf'
    classes='block my-2'
  />
);

export default MyResume;
