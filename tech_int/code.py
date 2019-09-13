# Top tips for coding part in general:
# 1. Use object programing
# 2. Clear define input and output return values
# 3. Speed
# 4. Practice recursion
# 5. Ne ready to write code


class Solution:
    def reverse(self, string):
        if len(string) == 0:
            return string
        else:
            return self.reverse(string[1:]) + string[0]

    def reverseIterative(self, string):
        anwser = ''
        item = string
        while len(item):
            anwser += item[-1]
            item = item[:-1]
        return anwser


a = 'hello'
print(Solution().reverseIterative(a))
