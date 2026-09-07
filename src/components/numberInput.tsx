import { defineComponent, onMounted, ref, toRefs } from 'vue';
import '@style/numberInput.scss';

export const getLastFilledIndex = (value: string) => {
  if (value.length > 0) {
    return value.length - 1;
  }
  return 0;
};

export const getActiveInputIndex = (value: string) => {
  return getLastFilledIndex(value);
};

export default defineComponent({
  name: 'NumberInput',
  props: {
    total: {
      type: Number,
      default: 6,
    },
    split: {
      type: Number,
      default: undefined,
    },
    extra: {
      type: Number,
      default: undefined,
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const { total, split, extra } = toRefs(props);
    const inputRef = ref<HTMLInputElement>();
    const inputValue = ref('');
    const inputCursorPosition = ref(0);
    const inputFocus = ref(false);

    const setCursorPosition = (index: number) => {
      // 没有实例
      if (!inputRef.value) return;
      inputRef.value.focus();

      const nextIndex = inputValue.value.length > 0 ? inputValue.value.length - 1 : index;
      inputCursorPosition.value = nextIndex;
      inputRef.value.setSelectionRange(nextIndex, nextIndex + 1);
    };

    const handleInputFocus = () => {
      inputFocus.value = true;
    };

    const handleInputBlur = () => {
      inputFocus.value = false;
    };

    const renderItem = () => {
      const activeIndex = getActiveInputIndex(inputValue.value);
      const items = Array.from({ length: total.value }, (_, index) => (
        <div
          class={[
            'codeItem',
            inputFocus.value && activeIndex === index && 'active',
            inputValue.value[index] && 'hasvalue',
          ]}
          onClick={() => setCursorPosition(index)}
        >
          {inputValue.value[index]}
        </div>
      ));
      // 处理分割线
      const handleSplit = (arr: any[], splitValue: number | undefined) => {
        return arr.flatMap((item, idx) =>
          idx > 0 && splitValue && idx % splitValue === 0 ? [<div class="split"></div>, item] : [item],
        );
      };
      // 额外
      if (extra.value) {
        const extraStart = total.value - extra.value;
        const extraItems = items.slice(extraStart);
        const mainItems = items.slice(0, extraStart);

        return (
          <>
            {handleSplit(mainItems, split.value)}
            <div class="split"></div>
            <div class="extra">{handleSplit(extraItems, split.value)}</div>
          </>
        );
      }

      return <>{handleSplit(items, split.value)}</>;
    };

    const emitValueChange = () => {
      emit('update:value', inputValue.value);
    };

    onMounted(() => {
      // 设置聚焦
      inputRef.value?.focus();
    });

    const handleInput = (event: Event) => {
      const e = event as InputEvent;
      const target = e.target as HTMLInputElement;
      const value = target?.value;
      // 忽略输入中的中文
      if (e.inputType === 'insertCompositionText') {
        // 匹配中文，允许汉字存在
        const testValue = /[\u4e00-\u9fa5]/.test(e?.data ?? '');
        if (!testValue) {
          return;
        }
      }
      inputValue.value = value.toUpperCase();
      emitValueChange();
      inputCursorPosition.value = value.length;
      // 位数达标，失焦
      if (inputValue.value.length === total.value) {
        inputRef.value?.blur();
      }
    };

    return () => (
      <>
        <div class="codeBox">
          {renderItem()}
          <input
            ref={inputRef}
            type="text"
            class="codeInput"
            maxlength={total.value}
            onInput={handleInput}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
      </>
    );
  },
});
