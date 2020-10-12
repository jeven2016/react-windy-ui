import clsx from 'clsx';

export default function useErrorStyle(errorType) {
  const clsName = `border-info ${errorType}`;
  return clsx({[clsName]: errorType});
}