export default async function getIcon(iconName) {
  const iconPath = await import(`../../asset/resource/${iconName}.png`);
  return iconPath.default;
}