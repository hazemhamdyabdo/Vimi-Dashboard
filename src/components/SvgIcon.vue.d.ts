declare module "@/components/SvgIcon.vue" {
  import { DefineComponent } from "vue";

  const SvgIcon: DefineComponent<{
    icon: string;
  }, {}, any>;

  export default SvgIcon;
}