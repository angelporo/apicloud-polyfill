import fs from "fs-extra"
import path from "path"

let Polyfill = ({project, template="clock-show"})=>{
      const root = path.resolve(project);
      const configPath = path.resolve(project,"config.xml")
      const packageJsonPath = path.resolve(project,"package.json")

      if ( ! fs.existsSync(root) || ! fs.existsSync(configPath)) {
        console.error(`${root} 不是一个有效的APICloud项目!`)
        return
      }

      if (fs.existsSync(packageJsonPath)) {
        console.error(`不宜直接进行 Polyfill 操作,请删除 ${packageJsonPath} 后重试!`)
        return
      }

      let templatePath = path.join(__dirname, "../template", template)

      fs.copy(templatePath, root, function (err) {
        if (err) return console.error(err)
        console.log(`${root} Polyfill 成功!`)
      });
}

export default Polyfill
